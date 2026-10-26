export default [
    { path: 'login', name: 'Login', meta: { title: 'auth.login.page_title' }, component: () => import('@/views/Pages/Auth/Login.vue') },
    { path: 'email-otp-login', name: 'EmailOtpLogin', meta: { title: 'auth.login.page_title' }, component: () => import('@/views/Pages/Auth/EmailOtp.vue') },
    { path: 'sms-otp-login', name: 'SmsOtpLogin', meta: { title: 'auth.login.page_title' }, component: () => import('@/views/Pages/Auth/SMSOtp.vue') },
    { path: 'register', name: 'Register', meta: { title: 'auth.register.page_title' }, component: () => import('@/views/Pages/Auth/Register.vue') },
    { path: 'register/email', name: 'EmailRequest', meta: { title: 'auth.register.page_title' }, component: () => import('@/views/Pages/Auth/EmailRequest.vue') },
    { path: 'register/verify/:token', name: 'EmailVerification', meta: { title: 'auth.register.page_title' }, component: () => import('@/views/Pages/Auth/EmailVerification.vue') },
    { path: 'password', name: 'Password', meta: { title: 'auth.password.page_title' }, component: () => import('@/views/Pages/Auth/Password.vue') },
    { path: 'failed-login-attempts', name: 'FailedLoginAttempt', meta: { roles: ['admin'] }, component: () => import('@/views/Pages/Auth/FailedLoginAttempt.vue') },
];
