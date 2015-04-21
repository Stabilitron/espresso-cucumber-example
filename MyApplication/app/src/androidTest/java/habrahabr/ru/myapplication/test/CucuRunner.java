package habrahabr.ru.myapplication.test;

import android.os.Bundle;
import com.google.android.apps.common.testing.testrunner.GoogleInstrumentationTestRunner;
import cucumber.api.android.CucumberInstrumentationCore;

public class CucuRunner extends GoogleInstrumentationTestRunner{
    private CucumberInstrumentationCore helper;

    public CucuRunner() {
        helper = new CucumberInstrumentationCore(this);
    }

    @Override
    public void onCreate(Bundle arguments) {
        helper.create(arguments);
        super.onCreate(arguments);
    }

    @Override
    public void onStart() {
        helper.start();
    }

}
