/* Чтобы узнать как работать в git 
проходим курс нас сайте githowto на этом я пока остановился!*/

/* чтобы git следил за папкой в которой мы находимся
пишем команду
git init
 */

/* 
git init подготовка к работе
git config --global user.name "Nikolay" установка имени
git config --global user.email "nickolas1594@mail.ru" установка почты
git status проверка статуса фалов
git add -A добавление все папок и файлв в репозиторий
git commit -a -m"first commit" зоздание котрольной точки
git remote add origin https://github.com/MNaggreen/test2.git ссылка после создания вручную репозитория 
непосредственно на гит хабе
добавление источника для загрузки
git push -u origin master загрузка непосредственно 
на источник указанный выше*/


/* чтобы представиться нужно
git config --global user.name "Nikolay"
git config --global user.email "nickolas1594@mail.ru"
чтобы проверит изменения заходим в папку git
которая создалась в нашем проекте и там в файле config 
смотрим изменения*/



/* 3 состояния бывает у файлов
1 создан
2 гит следит за файлами
3 гит создал контрольную точку (комит)
git status поможет определить какой статус у проекта*/



/* git add -A 
добавить все файлы в папке в индекс (отслеживания)
Теперь проверяем с помощью git status и видим все файлы зеленые
ура */
/* если после этой команды добавить ещё файл
то он не добавить в индекс
т.е. нужно заного писать команду 

git add -A 
или
git add main.css

*/




/* создаем комит(котрольную точку)
git commit -a -m"first commit" 
Где a это все файлы
а m это сообщение к нашему изменению
после этого гит перестанет следить за всеми файлами*/

/*  нужно заного проделать операции выши
только с другим коммитом */



/* git log посмотреть логи коммитов */

/* создаем репозиторий на github вручную
заходим на сайт там в раздел 
репозитории
 - new 
 вписываем информацию
 копируем команду
 git remote add origin https://github.com/MNaggreen/test2.git
 теперь наш гитхаб связан с проектом
 далее мы добавляем в рупозиторий в интернете файлы
 git push -u origin master
 y говорит о том что все файлы будут после изменения пушиться сюда
 далуу гитхаб хочет Master заменить на Main*/

 
 
 /*Важная заметка
  то есть после создание проекта не добавляем readme
 и в списе команд увидим
 git branch -M main
 это значит что мы Master ветку переиминовываем на 
 main 
 и далее естественно
 команда меняется
 git push -u origin main*/




 /* краткая шпаргалка для обновления нашего репозитари на гит хабе
 git status
  git add -A
  git commit -a -m"new message example"
  git status
  git push
  все*/


  /* ещё одна шпаргалка
    …or create a new repository on the command line
echo "# portfolio" >> README.md
                       git init
git add README.md
                   git commit -m "first commit"
                   git branch -M main
                   git remote add origin https://github.com/MNaggreen/portfolio.git
git push -u origin main






…or push an existing repository from the command line
git remote add origin https://github.com/MNaggreen/portfolio.git
git branch -M main
git push -u origin main */


