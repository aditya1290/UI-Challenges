
var FrontPart = document.getElementById('FrontPart');
var SignUpPage = document.getElementById('basePartSignUp')
var LoginPage = document.getElementById('basePartLogin');
var WelcomeBackDivLeft = document.getElementById('WelcomeBackDiv1');
var WelcomeBackDivRight = document.getElementById('WelcomeBackDiv2');


var Button = document.getElementById('SignInButtonSpan');

function runAnimation(){
    if(FrontPart.classList.contains('runAnimation'))     {

        // Register part showing slowly ==> Left Front part, text part left, form part right
        FrontPart.classList.remove('runAnimation');
        FrontPart.classList.add('runAnimationReverse');
        

        setTimeout(() => {
            LoginPage.classList.remove('active');
            SignUpPage.classList.add('active'); 
        }, 250);

        setTimeout(() => {Button.classList.remove('OpacityIn');Button.classList.add('OpacityOut')}, 0);
        setTimeout(() => {Button.innerText = 'SIGN IN' }, 250);
        setTimeout(() => {Button.classList.remove('OpacityOut');Button.classList.add('OpacityIn'); }, 375);
        
        
        setTimeout(()=>{WelcomeBackDivRight.classList.remove('FrontActive');},0);
        setTimeout(()=>{WelcomeBackDivLeft.classList.add('FrontActive');},375);
        setTimeout(() => {LoginPage.classList.add('moveRight'); SignUpPage.classList.add('moveRight');LoginPage.classList.remove('permanent');}, 0);
        setTimeout(()=>{LoginPage.classList.remove('moveRight');SignUpPage.classList.remove('moveRight')},500);

        
    }
    else    {

        // Login part loading slowly
        FrontPart.classList.remove('runAnimationReverse');
        FrontPart.classList.add('runAnimation');

        setTimeout(() => {
            SignUpPage.classList.remove('active');
            LoginPage.classList.add('active');
        }, 200);
        
        
        setTimeout(() => {Button.classList.remove('OpacityIn');Button.classList.add('OpacityOut')}, 0);
        setTimeout(() => {Button.innerText = 'SIGN UP' }, 250);
        setTimeout(() => {Button.classList.remove('OpacityOut');Button.classList.add('OpacityIn'); }, 375);


        setTimeout(()=>{WelcomeBackDivLeft.classList.remove('FrontActive');},0);
        setTimeout(()=>{WelcomeBackDivRight.classList.add('FrontActive');},375);
        setTimeout(() => {SignUpPage.classList.add('moveLeft');LoginPage.classList.add('moveLeft');}, 0);
        setTimeout(()=>{SignUpPage.classList.remove('moveLeft');LoginPage.classList.add('permanent');LoginPage.classList.remove('moveLeft')},500);
        
    }
}


// setInterval(() => {
//     runAnimation();
// }, 2700);