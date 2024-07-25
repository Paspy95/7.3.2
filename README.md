# Домашнее задание к занятию «3.2 Playwright»

## Задача 1. UI-тест на Playwright

Нужно протестировать авторизацию на сайте [netology.ru](https://netology.ru/).

1. Подготовьте тестовые данные:

- создайте файл `user.js` и положите в него свой email и password как константы;
- добавьте файл `user.js` в `.gitignore`. 
**Важно.** Проследите, чтобы email и password не попали в ваш репозиторий, иначе ваш проект не пройдёт аудит безопасности, а злоумышленники получат ваши данные.

2. Создайте тест 1 «Успешная авторизация»:

- откройте [форму авторизации](https://netology.ru/?modal=sign_in);
- добавьте ваш email в поле для ввода email;
- добавьте ваш пароль в поле для ввода пароля;
- нажмите на кнопку `Войти`.

3. Проверьте ожидаемый результат:

- проверьте, что открылась страница [профиля](https://netology.ru/profile);
- удостоверьтесь, что страница профиля открыта, например, проверив элемент `h2` и текст заголовка.

4. Создайте тест 2 «Неуспешная авторизация»:

- повторите тест 1, используя невалидные данные для авторизации.

5. Проверьте результат:

- проверьте текст об ошибке в появившемся блоке.

6. Запушьте репозиторий с тестами на GitHub.

7. Отправьте ссылку на репозиторий на проверку.

## Задача 2* (необязательная). Скриншоты.

Усложнённая версия второго задания: нужно добавить автоматические скриншоты для каждого экрана. Сделать это можно с помощью `playwright screenshots`. 

1. Выясните, как настроить эту функциональность.
2. На переход в тесте из задания сделайте скриншоты.
3. Запушьте репозиторий с тестами, конфигурационными файлами на GitHub.
4. Скриншоты приложите в раздел issues.
5. Отправьте ссылку на репозиторий на проверку.