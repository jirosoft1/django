from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post, User

def main(request):
    user = User()
    user.name = "次郎丸 雄二"
    user.image = "avatar-4.jpg"
    return render(request, 'blog/main.html', {'user': user})

def post_list(request):
    posts = Post.objects.filter(publish_date__lte=timezone.now()).order_by('publish_date')
    return render(request, 'blog/post_list.html', {'posts' : posts})


def post_detail(request,pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post' : post})
    
    # Create your views here.
