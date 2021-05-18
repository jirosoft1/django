from django.conf import settings
from django.db import models
from django.utils import timezone

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    publish_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class User(models.Model):
    name = models.CharField(max_length=200,null=True)
    image = models.CharField(max_length=200,null=True)
    password = models.CharField(max_length=200,null=True)
    type = models.IntegerField(null=True)


class PestM(models.Model):
    T_No = models.IntegerField(null=True)
    PestType = models.CharField(max_length=200,null=True)
    PestName = models.CharField(max_length=200,null=True)
    MakerName = models.CharField(max_length=200,null=True)
    YukoSeibun = models.CharField(max_length=200,null=True)
    KaisuSeibun = models.CharField(max_length=200,null=True)
    Noudo = models.CharField(max_length=200,null=True)
    KongouSu = models.IntegerField(null=True)
    Youto = models.CharField(max_length=200,null=True)
    Zaigata = models.CharField(max_length=200,null=True)
    TourokuYMD = models.CharField(max_length=200,null=True)

class PestDetM(models.Model):
    T_No = models.IntegerField(null=True)
    Youto = models.CharField(max_length=200,null=True)
    PestType = models.CharField(max_length=200,null=True)
    PestName = models.CharField(max_length=200,null=True)
    ShortName = models.CharField(max_length=200,null=True)
    VegiName = models.CharField(max_length=200,null=True)
    TekiyouBasyo = models.CharField(max_length=200,null=True)
    TekiyouByogaichu = models.CharField(max_length=200,null=True)
    SiyouMokuteki = models.CharField(max_length=200,null=True)
    KisyakuBaisuu = models.CharField(max_length=200,null=True)
    SanpuEkiryou = models.CharField(max_length=200,null=True)
    SiyouJiki = models.CharField(max_length=200,null=True)
    SiyouKaisuu = models.CharField(max_length=200,null=True)
    SiyouHouhou = models.CharField(max_length=200,null=True)
    KunjyoJikan = models.CharField(max_length=200,null=True)
    KunjyoOndo = models.CharField(max_length=200,null=True)
    TekiyouDojyou = models.CharField(max_length=200,null=True)
    TekiyouChitai = models.CharField(max_length=200,null=True)
    TekiyouNouyaku = models.CharField(max_length=200,null=True)
    KongouSuu = models.IntegerField(null=True)
    SeibunKaisu1 = models.CharField(max_length=200,null=True)
    SeibunKaisu2 = models.CharField(max_length=200,null=True)
    SeibunKaisu3 = models.CharField(max_length=200,null=True)
    SeibunKaisu4 = models.CharField(max_length=200,null=True)
    SeibunKaisu5 = models.CharField(max_length=200,null=True)


# Create your models here.
