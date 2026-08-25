# قالب مدونة عربية لـ Jekyll

قالب RTL حديث ومينيمالي للمقالات والمدونات، مع وضع فاتح/داكن، تصميم متجاوب، Markdown/Rouge، SEO، RSS وSitemap.

## التشغيل
```bash
bundle install
bundle exec jekyll serve --livereload
```

ثم افتح http://localhost:4000

## مقال جديد
أنشئ `_posts/YYYY-MM-DD-title.md` مع front matter مثل:
```yaml
---
layout: post
title: "عنوان المقال"
description: "وصف قصير"
category: "تقنية"
tags: [برمجة, تقنية]
image: "/assets/images/article.jpg"
---
```
