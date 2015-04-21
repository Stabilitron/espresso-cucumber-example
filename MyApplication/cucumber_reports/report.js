$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Test.feature");
formatter.feature({
  "name": "Авторизация",
  "line": 1,
  "description": "",
  "id": "авторизация",
  "keyword": "Feature"
});
formatter.before({
  "status": "passed",
  "duration": 3939172649
});
formatter.scenario({
  "name": "Пользователь пытается авторизоваться используя неверные логин и пароль",
  "line": 2,
  "description": "",
  "id": "авторизация;пользователь-пытается-авторизоваться-используя-неверные-логин-и-пароль",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Счетчик попыток входа показывает 3",
  "line": 3,
  "keyword": "Given "
});
formatter.step({
  "name": "Пользователь \u0027RandomName\u0027 авторизуется в системе с паролем \u0027wrongPassword\u0027",
  "line": 4,
  "keyword": "When "
});
formatter.step({
  "name": "Счетчик попыток входа должен показывать 2",
  "line": 5,
  "keyword": "Then "
});
formatter.step({
  "name": "Появилось сообщение \u0027Неверное имя пользователя или пароль.\u0027",
  "line": 6,
  "keyword": "And "
});
formatter.match({
  "location": "CucumberActivitySteps.givenLoginTryCounter(Integer)",
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 606427140
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "RandomName",
      "offset": 14
    },
    {
      "val": "wrongPassword",
      "offset": 60
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 8847311191
});
formatter.match({
  "location": "CucumberActivitySteps.checkLoginTryCounter(Integer)",
  "arguments": [
    {
      "val": "2",
      "offset": 40
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 36038343
});
formatter.match({
  "location": "CucumberActivitySteps.checkTextOnScreen2(String)",
  "arguments": [
    {
      "val": "Неверное имя пользователя или пароль.",
      "offset": 21
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 6985935
});
formatter.after({
  "status": "passed",
  "duration": 1262130
});
formatter.before({
  "status": "passed",
  "duration": 2147509875
});
formatter.scenario({
  "name": "Пользователь пытается авторизоваться используя неверные логин и пароль три раза подряд",
  "line": 8,
  "description": "",
  "id": "авторизация;пользователь-пытается-авторизоваться-используя-неверные-логин-и-пароль-три-раза-подряд",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Счетчик попыток входа показывает 3",
  "line": 9,
  "keyword": "Given "
});
formatter.step({
  "name": "Пользователь \u0027RandomName\u0027 авторизуется в системе с паролем \u0027wrongPassword\u0027",
  "line": 10,
  "keyword": "When "
});
formatter.step({
  "name": "Пользователь \u0027RandomName\u0027 авторизуется в системе с паролем \u0027wrongPassword\u0027",
  "line": 11,
  "keyword": "And "
});
formatter.step({
  "name": "Пользователь \u0027RandomName\u0027 авторизуется в системе с паролем \u0027wrongPassword\u0027",
  "line": 12,
  "keyword": "And "
});
formatter.step({
  "name": "Счетчик попыток входа должен показывать 0",
  "line": 13,
  "keyword": "Then "
});
formatter.step({
  "name": "Появилось сообщение \u0027Больше войти нельзя\u0027",
  "line": 14,
  "keyword": "And "
});
formatter.step({
  "name": "Кнопка входа стала неактивной",
  "line": 15,
  "keyword": "And "
});
formatter.match({
  "location": "CucumberActivitySteps.givenLoginTryCounter(Integer)",
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 293731341
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "RandomName",
      "offset": 14
    },
    {
      "val": "wrongPassword",
      "offset": 60
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 7863920465
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "RandomName",
      "offset": 14
    },
    {
      "val": "wrongPassword",
      "offset": 60
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 7923241400
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "RandomName",
      "offset": 14
    },
    {
      "val": "wrongPassword",
      "offset": 60
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 7615906303
});
formatter.match({
  "location": "CucumberActivitySteps.checkLoginTryCounter(Integer)",
  "arguments": [
    {
      "val": "0",
      "offset": 40
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 7037181
});
formatter.match({
  "location": "CucumberActivitySteps.checkTextOnScreen2(String)",
  "arguments": [
    {
      "val": "Больше войти нельзя",
      "offset": 21
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 5711407
});
formatter.match({
  "location": "CucumberActivitySteps.checkLoginButtonDisabled()"
});
formatter.result({
  "status": "passed",
  "duration": 6759463
});
formatter.after({
  "status": "passed",
  "duration": 262290
});
formatter.before({
  "status": "passed",
  "duration": 2248811432
});
formatter.scenario({
  "name": "Пользователь авторизуется с валидными именем и паролем",
  "line": 17,
  "description": "",
  "id": "авторизация;пользователь-авторизуется-с-валидными-именем-и-паролем",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Счетчик попыток входа показывает 3",
  "line": 18,
  "keyword": "Given "
});
formatter.step({
  "name": "Пользователь \u0027admin\u0027 авторизуется в системе с паролем \u0027admin\u0027",
  "line": 19,
  "keyword": "When "
});
formatter.step({
  "name": "Появилось сообщение \u0027Hello Habrahabr!\u0027",
  "line": 20,
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberActivitySteps.givenLoginTryCounter(Integer)",
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 6760014
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 55
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 7793766027
});
formatter.match({
  "location": "CucumberActivitySteps.checkTextOnScreen2(String)",
  "arguments": [
    {
      "val": "Hello Habrahabr!",
      "offset": 21
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 6898045
});
formatter.after({
  "status": "passed",
  "duration": 273585
});
formatter.before({
  "status": "passed",
  "duration": 2030841231
});
formatter.scenario({
  "name": "Пользователь авторизуется после двух неудачных попыток, а потом возвращается на экран авторизации с помощью кнопки \u0027Назад\u0027",
  "line": 22,
  "description": "",
  "id": "авторизация;пользователь-авторизуется-после-двух-неудачных-попыток,-а-потом-возвращается-на-экран-авторизации-с-помощью-кнопки-\u0027назад\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Счетчик попыток входа показывает 3",
  "line": 23,
  "keyword": "Given "
});
formatter.step({
  "name": "Пользователь \u0027RandomName\u0027 авторизуется в системе с паролем \u0027wrongPassword\u0027",
  "line": 24,
  "keyword": "And "
});
formatter.step({
  "name": "Пользователь \u0027RandomName\u0027 авторизуется в системе с паролем \u0027wrongPassword\u0027",
  "line": 25,
  "keyword": "And "
});
formatter.step({
  "name": "Пользователь \u0027admin\u0027 авторизуется в системе с паролем \u0027admin\u0027",
  "line": 26,
  "keyword": "And "
});
formatter.step({
  "name": "Пользователь нажимает кнопку назад",
  "line": 27,
  "keyword": "When "
});
formatter.step({
  "name": "Счетчик попыток входа должен показывать 3",
  "line": 28,
  "keyword": "Then "
});
formatter.step({
  "name": "Присутствует сообщение \u0027Введите имя пользователя и пароль\u0027",
  "line": 29,
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberActivitySteps.givenLoginTryCounter(Integer)",
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 5726010
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "RandomName",
      "offset": 14
    },
    {
      "val": "wrongPassword",
      "offset": 60
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 7635314325
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "RandomName",
      "offset": 14
    },
    {
      "val": "wrongPassword",
      "offset": 60
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 9554235343
});
formatter.match({
  "location": "CucumberActivitySteps.userLogin(String,String)",
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 55
    }
  ]
});
formatter.result({
  "status": "passed",
  "duration": 8020141601
});
formatter.match({
  "location": "CucumberActivitySteps.clickOnBackButton()"
});
formatter.result({
  "status": "passed",
  "duration": 2500015
});
formatter.match({
  "location": "CucumberActivitySteps.checkLoginTryCounter(Integer)",
  "arguments": [
    {
      "val": "3",
      "offset": 40
    }
  ]
});
formatter.result({
  "status": "failed",
  "error_message": "com.google.android.apps.common.testing.ui.espresso.NoMatchingViewException: No views in hierarchy found matching: with id: is \u003c2131230721\u003e\n\nView Hierarchy:\n+\u003eDecorView{id\u003d-1, visibility\u003dVISIBLE, width\u003d768, height\u003d1184, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d0.0, child-count\u003d1} \n|\n+-\u003eActionBarOverlayLayout{id\u003d16909171, res-name\u003ddecor_content_parent, visibility\u003dVISIBLE, width\u003d768, height\u003d1184, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d0.0, child-count\u003d2} \n|\n+--\u003eFrameLayout{id\u003d16908290, res-name\u003dcontent, visibility\u003dVISIBLE, width\u003d768, height\u003d1022, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d162.0, child-count\u003d1} \n|\n+---\u003eRelativeLayout{id\u003d-1, visibility\u003dVISIBLE, width\u003d768, height\u003d1022, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d0.0, child-count\u003d1} \n|\n+----\u003eTextView{id\u003d-1, visibility\u003dVISIBLE, width\u003d208, height\u003d38, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d32.0, y\u003d32.0, text\u003dHello Habrahabr!, input-type\u003d0, ime-target\u003dfalse} \n|\n+--\u003eActionBarContainer{id\u003d16909172, res-name\u003daction_bar_container, visibility\u003dVISIBLE, width\u003d768, height\u003d112, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d50.0, child-count\u003d2} \n|\n+---\u003eToolbar{id\u003d16909173, res-name\u003daction_bar, visibility\u003dVISIBLE, width\u003d768, height\u003d112, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d0.0, child-count\u003d2} \n|\n+----\u003eTextView{id\u003d-1, visibility\u003dVISIBLE, width\u003d247, height\u003d54, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d32.0, y\u003d29.0, text\u003dSecretActivity, input-type\u003d0, ime-target\u003dfalse} \n|\n+----\u003eActionMenuView{id\u003d-1, visibility\u003dVISIBLE, width\u003d72, height\u003d112, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d696.0, y\u003d0.0, child-count\u003d1} \n|\n+-----\u003eOverflowMenuButton{id\u003d-1, desc\u003dMore options, visibility\u003dVISIBLE, width\u003d72, height\u003d96, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dtrue, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dtrue, is-layout-requested\u003dfalse, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d8.0} \n|\n+---\u003eActionBarContextView{id\u003d16909174, res-name\u003daction_context_bar, visibility\u003dGONE, width\u003d0, height\u003d0, has-focus\u003dfalse, has-focusable\u003dfalse, has-window-focus\u003dtrue, is-clickable\u003dfalse, is-enabled\u003dtrue, is-focused\u003dfalse, is-focusable\u003dfalse, is-layout-requested\u003dtrue, is-selected\u003dfalse, root-is-layout-requested\u003dfalse, has-input-connection\u003dfalse, x\u003d0.0, y\u003d0.0, child-count\u003d0} \n|\n\tat dalvik.system.VMStack.getThreadStackTrace(Native Method)\n\tat java.lang.Thread.getStackTrace(Thread.java:580)\n\tat com.google.android.apps.common.testing.ui.espresso.base.DefaultFailureHandler.getUserFriendlyError(DefaultFailureHandler.java:69)\n\tat com.google.android.apps.common.testing.ui.espresso.base.DefaultFailureHandler.handle(DefaultFailureHandler.java:40)\n\tat com.google.android.apps.common.testing.ui.espresso.ViewInteraction.runSynchronouslyOnUiThread(ViewInteraction.java:159)\n\tat com.google.android.apps.common.testing.ui.espresso.ViewInteraction.check(ViewInteraction.java:133)\n\tat habrahabr.ru.myapplication.test.CucumberActivitySteps.givenLoginTryCounter(CucumberActivitySteps.java:69)\n\tat habrahabr.ru.myapplication.test.CucumberActivitySteps.checkLoginTryCounter(CucumberActivitySteps.java:89)\n\tat ✽.Then Счетчик попыток входа должен показывать 3(features/Test.feature:28)\n",
  "duration": 79286063
});
formatter.match({
  "location": "CucumberActivitySteps.checkTextOnScreen1(String)",
  "arguments": [
    {
      "val": "Введите имя пользователя и пароль",
      "offset": 24
    }
  ]
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed",
  "duration": 2022700073
});
});