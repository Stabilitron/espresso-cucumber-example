package habrahabr.ru.myapplication;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.graphics.Color;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;


public class MainActivity extends Activity {

    private AlertDialog alert11;
    private EditText txtUsername;
    private EditText txtPassword;
    private Button btnLogin;
    private TextView lblTitle;
    private TextView lblCounter;

    private Integer mTryLeft = 3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(habrahabr.ru.myapplication.R.layout.activity_main);

        lblTitle = (TextView)findViewById(habrahabr.ru.myapplication.R.id.lblTitle);
        lblCounter = (TextView)findViewById(habrahabr.ru.myapplication.R.id.lblCounter);
        txtUsername = (EditText)findViewById(habrahabr.ru.myapplication.R.id.txtUsername);
        txtPassword = (EditText)findViewById(habrahabr.ru.myapplication.R.id.txtPassword);
        btnLogin = (Button)findViewById(habrahabr.ru.myapplication.R.id.btnLogin);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View arg0){
                login(txtUsername.getText().toString(), txtPassword.getText().toString());
            }
        });

        updateCounter();
    }

    private void updateCounter() {
        lblCounter.setText(String.format(getResources().getString(habrahabr.ru.myapplication.R.string.login_try_left),mTryLeft));
    }

    public void login(String userName, String password){
        LoginTask lt = new LoginTask();
        lt.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, userName, password);
    }

    private class LoginTask extends AsyncTask<String, Boolean, Boolean> {
        protected Boolean doInBackground(String...  params) {
            String userName = params[0];
            String password = params[1];

            Boolean result = false;
            if(userName.equals("admin") && password.equals("admin")){
                result = true;
            }

            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            return result;
        }

        protected void onProgressUpdate(Integer... progress) {
            // TODO You are on the GUI thread, and the first element in
            // the progress parameter contains the last progress
            // published from doInBackground, so update your GUI
        }

        protected void onPostExecute(Boolean result) {
            if(result){
                Intent myIntent = new Intent(MainActivity.this, SecretActivity.class);
                startActivity(myIntent);
            }else {
                mTryLeft--;

                lblTitle.setBackgroundColor(Color.RED);
                lblTitle.setText("Неверное имя пользователя или пароль.");

                updateCounter();

                if(mTryLeft ==0){
                    btnLogin.setEnabled(false);
                    lblTitle.setText("Больше войти нельзя");
                }
            }
        }
    }
}
