[Обо мне](about-us.md)
# инструкция по GIT и Linux командам

## Работа с Git

* Git — это набор консольных утилит, которые отслеживают и фиксируют изменения в файлах (чаще всего речь идет об исходном коде программ, но вы можете использовать его для любых файлов на ваш вкус). С его помощью вы можете откатиться на более старую версию вашего проекта, сравнивать, анализировать, сливать изменения и многое другое. Этот процесс называется контролем версий.

### Работа с ветками 
* Чтобы создать глвую ветку, необходимо написать `git checkout -b "new-branch-name"`.
* Чтобы переключиться на ветку 'git checkout branch-name'.
* Чтобы включить изменения з другой ветки в текущую (замерджить) `git merge branch-name`.

### Настройка 
* Чтобы настроить свое имя, пишем 'git config --global user.name "имя пользователя"'.
* Чтобы настроить свой адрес электронной почты, пишем 'git config --global user.email "электронная почта"'.
### Создание проекта 
1. Создаем репозиторий на сайте Github.
1. Подготавливаем папку для Git репозитория с помощью команды `git init`.
1. Связываем папку с удаленным репозиторием с помощью команды `git remote add origin https:ссылка на репозиторий`.
1. Добавляем содержимое рабочей директории в индекс с помощью команды `git add`.
1. Добавляем комментарий к изменениям  с помощью команды `git commit -m "комментарий"`.
1. Отправляем изменения на сервер с помощью команды `git push origin`.
#### Взаимодействие с проектом 
* Чтобы скачать последнюю версию изменения, нужно написать `git pull`.
* Чтобы посмотреть состояние файлов в рабочей директории и индексе, пишем `git status`.
* Чтобы "тронуть" объект (т.е. изменить последнюю дату изменения и открытия), пишем `touch`.
* Чтобы посмотреть список изменений в проекте `git confid --list`.
#### Создание и взаимодейстрие с папкой 
* Чтобы создать папку с названием "название папки", пишем `mkdir название папки`.
* Чтобы зайти в папку "название папки", нужно написать `cd название папки`.
* Чтобы проверить целостность дерева папки. пишем `ls -la`.
#### Стандартные команды и действия 
* Чтобы сбросить команду, нужно нажать `Ctrl + C`.
* Чтобы вставить текст из буфера обмена, нужно нажать `Shift + Insert`.
### Работа с индексом
* Чтобы добавлять файл в индекс, надо написать `git add имя файла`.
* Чтобы удалить файл из индекса 'git rm имя файла'
    * Чтобы удалить файл из индекса, но оставить в рабочей директории `git rm --cached имя файла`.
## Работа с Vim
* Чтобы включить vim, нужно написать `vim "название папки"`.
* Чтобы поставить заголовок, пишем #"название заголовка". Чем больше "#" перед заголовком,тем он меньше (максимально 6 "#").
* Чтобы создать точку перед пунктом, нужно поставить звездочку и пробел перед текстом.
* Чтобы создать пондпункт, нужно поставить 4 пробела перед звездочкой.
* Чтобы создать последовательность, нужно ставить 1. перед каждой строчкой.
* Чтобы выйти из Vin, нужно нажать Esc и ввести в командную строку `:q`.
* Чтобы сохранить данные , нужно нажать Esc и ввести в командную строку `:w`.

## Работа с Markdown
1. Маркированный список 

    * первый элемент;
    + второй элемент;
    - третий элемент.
1. Нумерованный список

    1. первый эелемнт;
    1. второй элемент;
    1. третий элемент;
1. Ссылки 

* Чтобы создать ссылку, пишем `[Название для ссылки](https://qeep.pro)`.
    * Фотография вставляется с помощью ссылки с восклицательным знаком `![Фотография](ссылка)`. 
    * Пример: ![Фотография](https://pp.userapi.com/c845120/v845120511/8cc01/Fkugcff2rOU.jpg)

### Таблицы

Первая колонка|Вторая колонка
--------------|--------------
Ячейка 1      | Ячейка 2
Ячейка 3      | Ячейка 4

### Работа с Javaskript 
* DOM - Document Object Model
* BOM -Browser Object Model 

