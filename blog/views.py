from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post, User, PestDetM

def main(request):
    user = User()
    user.name = "次郎丸 雄二"
    user.image = "avatar-4.jpg"
    page1 = "main"
    return render(request, 'blog/main.html', {'user': user,'page1': page1})

def pestsearch(request):
    user = User()
    user.name = "次郎丸 雄二"
    user.image = "avatar-4.jpg"
    page1 = "pest"
    page2 = "search"
    mode = ""
    pest_type = ""
    vegi_name = ""

    if (request.method == "POST"):
        pest_type = request.POST.get("pest_type", "")
        vegi_name = request.POST.get("vegi_name", "")
        mode = "POST"
        pestdets = PestDetM.objects.filter(Youto__exact=pest_type).filter(VegiName__contains=vegi_name)[:100]
    else:
        mode = "GET"
        pestdets = ()
    dic = {'user': user, 'page1': page1, 'page2': page2, 
        'pest_type':pest_type, 'vegi_name':vegi_name,'mode': mode,'pestdets': pestdets} 
    return render(request, 'blog/pestsearch.html',dic)

def post_list(request):
    posts = Post.objects.filter(publish_date__lte=timezone.now()).order_by('publish_date')
    return render(request, 'blog/post_list.html', {'posts' : posts})


def post_detail(request,pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post' : post})
    
    # Create your views here.
