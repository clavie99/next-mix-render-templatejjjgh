export function middleware(context) {
    const { request, redirect } = context;
    const url = new URL(request.url);
    // 重定向
    if (url.pathname === '/protected') {
      return redirect('/login'， 308);
    }
}
