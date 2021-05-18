from django.contrib import admin

from .models import Post, PestM, User,PestDetM

admin.site.register(Post)
admin.site.register(PestM)
admin.site.register(PestDetM)
admin.site.register(User)

# Register your models here.
