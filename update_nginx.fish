cp resume-site /etc/nginx/sites-available/resume-site
ln -sf /etc/nginx/sites-available/resume-site /etc/nginx/sites-enabled/resume-site
cp nginx.conf /etc/nginx/nginx.conf
nginx -s reload
