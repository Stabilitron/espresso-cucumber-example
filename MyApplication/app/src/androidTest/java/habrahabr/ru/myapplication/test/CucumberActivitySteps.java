package habrahabr.ru.myapplication.test;

import android.app.Activity;
import android.app.Instrumentation;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.test.ActivityInstrumentationTestCase2;
import android.view.View;
import com.google.android.apps.common.testing.ui.espresso.action.ViewActions;
import java.io.ByteArrayOutputStream;
import cucumber.api.Scenario;
import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import habrahabr.ru.myapplication.MainActivity;
import habrahabr.ru.myapplication.R;

import static com.google.android.apps.common.testing.ui.espresso.Espresso.onView;
import static com.google.android.apps.common.testing.ui.espresso.assertion.ViewAssertions.matches;
import static com.google.android.apps.common.testing.ui.espresso.matcher.ViewMatchers.isDisplayed;
import static com.google.android.apps.common.testing.ui.espresso.matcher.ViewMatchers.isEnabled;
import static com.google.android.apps.common.testing.ui.espresso.matcher.ViewMatchers.withId;
import static com.google.android.apps.common.testing.ui.espresso.matcher.ViewMatchers.withText;
import static org.hamcrest.CoreMatchers.not;

@CucumberOptions(format = {"pretty","html:/data/data/habrahabr.ru.myapplication/html", "json:/data/data/habrahabr.ru.myapplication/jreport"},features = "features")
public class CucumberActivitySteps extends ActivityInstrumentationTestCase2<MainActivity> {

    public CucumberActivitySteps() {
        super(MainActivity.class);
    }

    @Before
    public void before() {
        Instrumentation instrumentation = getInstrumentation();
        assertNotNull(instrumentation);
        assertNotNull(getActivity());
        String testPackageName = instrumentation.getContext().getPackageName();
        String targetPackageName = instrumentation.getContext().getPackageName();
        assertEquals(testPackageName, targetPackageName);
    }

    private static void drawDecorViewToBitmap(Activity activity, Bitmap bitmap) {
        Canvas canvas = new Canvas(bitmap);
        activity.getWindow().getDecorView().draw(canvas);
    }

    @After
    public void embedScreenshot(Scenario scenario) {
        if(scenario.isFailed()) {
            Bitmap bitmap;
            final Activity activity = getActivity();
            View view = getActivity().getWindow().getDecorView();
            view.setDrawingCacheEnabled(true);
            bitmap = Bitmap.createBitmap(view.getDrawingCache());
            view.setDrawingCacheEnabled(false);
            ByteArrayOutputStream stream = new ByteArrayOutputStream();
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream);
            scenario.embed(stream.toByteArray(), "image/png");
        }
    }

    @Given("^Счетчик попыток входа показывает (\\d)$")
    public void givenLoginTryCounter(Integer counterValue) {
        String checkString = String.format(getActivity().getResources().getString(R.string.login_try_left), counterValue);
        onView(withId(R.id.lblCounter)).check(matches(withText(checkString)));
    }

    @When("^Пользователь нажимает кнопку назад$")
    public void clickOnBackButton() {
        ViewActions.pressBack();
    }

    @When("^Пользователь '(.+)' авторизуется в системе с паролем '(.+)'$")
    public void userLogin(String login, String password) {
        onView(withId(R.id.txtUsername)).perform(ViewActions.clearText());
        onView(withId(R.id.txtPassword)).perform(ViewActions.clearText());

        onView(withId(R.id.txtUsername)).perform(ViewActions.typeText(login));
        onView(withId(R.id.txtPassword)).perform(ViewActions.typeText(password));
        onView(withId(R.id.btnLogin)).perform(ViewActions.click());
    }

    @Then("^Счетчик попыток входа должен показывать (\\d)$")
    public void checkLoginTryCounter(Integer counterValue) {
        givenLoginTryCounter(counterValue);
    }

    @Then("^Кнопка входа стала неактивной$")
    public void checkLoginButtonDisabled() {
        onView(withId(R.id.btnLogin)).check(matches(not(isEnabled())));
    }

    @Then("^Присутствует сообщение '(.+)'$")
    public void checkTextOnScreen1(String text) {
        onView(withText(text)).check(matches(isDisplayed()));
    }

    @Then("^Появилось сообщение '(.+)'$")
    public void checkTextOnScreen2(String text) {
        checkTextOnScreen1(text);
    }
}