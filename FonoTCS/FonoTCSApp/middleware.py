from django.contrib.auth import get_user

class AuthenticationMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        user = get_user(request)
        if user.is_authenticated:
            request.user = user
            print(request.session['_auth_user_id'])
        else:
            # Aqui você pode definir o que fazer se o usuário não estiver autenticado.
            # Por exemplo, você pode redirecionar para a página de login, ou definir request.user como AnonymousUser.
            pass

        response = self.get_response(request)
        return response