describe('кейсы авторизации', function () {
    
    it('верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

    it('провека восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#forgotEmailButton').click(); // кликаю кнопку "забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввожу адрес почты
        cy.get('#restoreEmailButton').click(); // кликаю кнопку "восствновить"
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })
     
    it('верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iloveqastudio1'); // ввели неверный пароль
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })  
            
    it('неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('getman@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })    

    it('проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('geкmandolnikov.ru'); // ввели логин без сивола "@"
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })    
         
    it('приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин заглавные со строчными
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })    
         
})
