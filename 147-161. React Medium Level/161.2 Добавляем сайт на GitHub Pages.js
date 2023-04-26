/* 
1. Создаем репозиторий на сайте гит хаб.

2. git init
    git add .
        Пушим его как обычно проект на гит хаб.

3. устанавливаем в проект гит хаб pages. 
            npm install gh-pages --save-dev

4. добавляем изменения в package.json.
    'homepage': 'https://mnaggreen.github.io/marvel-test-project/'

    scripts: {
        'predeploy': 'npm run build',
        'deploy': 'gh-pages -d build'
    }

5. Пушим измененый файлы опять на репозиторий
   git add . 
    git commit -m "some message"
     git push

6. Отправляем наш сайт появиться новый branch специально созданный для нашего сайта
    npm run deploy.

7. Заходим в репозиторий в -Settings 
                            -Pages
                             проверряем чтобы был branch
                             gh-pages
        
8. Заходим на сайт!


Ссылка для более подробного разбора: 
https://www.youtube.com/watch?v=Q9n2mLqXFpU
*/