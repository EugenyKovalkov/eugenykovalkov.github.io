<meta charset="UTF-8" />
<?php
if (isset($_POST['objecttype'])) {$objecttype = $_POST['objecttype']; if ($objecttype == '') {unset($objecttype);}}
if (isset($_POST['typeofwork'])) {$typeofwork = $_POST['typeofwork']; if ($typeofwork == '') {unset($typeofwork);}}
if (isset($_POST['areanumber'])) {$areanumber = $_POST['areanumber']; if ($areanumber == '') {unset($areanumber);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}
 
if (isset($objecttype) && isset($typeofwork) && isset($areanumber) && isset($email) && isset($tel) && isset($tel)){
 
$address = "zhenya-karpov@bk.ru";
$mes = "Выберите тип объекта: $objecttype \nВыберите виды работ: $typeofwork \nПлощадь: $areanumber \nМыло: $email \nТелефон $tel";
$send = mail ($address,$areanumber,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$typeofwork");
if ($send == 'true')
{echo "Сообщение отправлено успешно, через 6 секунд Вы будете направлены на главную страницу блога <a href='https://bloggood.ru/'>BLOGGOOD.RU</a>,где сможете продолжить ваш просмотр";}
else {echo "Ошибка, сообщение не отправлено!";}
 
}
else
{
echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
}
?>
