# NULY – Trading Calculator PRO (PWA)

Triển khai nhanh để dùng trên điện thoại **không cần tải file**, có thể **Add to Home Screen** và **chạy offline**.

## Cách 1 — GitHub Pages (miễn phí)
1) Tạo repo mới trên GitHub.  
2) Upload **toàn bộ thư mục** này (index.html, manifest.webmanifest, service-worker.js, thư mục icons/).  
3) Vào **Settings → Pages** → Source: chọn **Deploy from a branch**, Branch: **main** (or master), Folder: /**root** → Save.  
4) Mở URL Pages → trên điện thoại mở link và **Add to Home Screen**.

## Cách 2 — Netlify Drop (cực nhanh)
1) Vào https://app.netlify.com/drop  
2) Kéo thả **nguyên thư mục** này vào → lấy URL → mở trên điện thoại và **Add to Home Screen**.

## Ghi chú iOS
- Safari: Mở link → Share → Add to Home Screen.  
- iOS cache PWA hơi chặt: khi update bản mới, có thể cần **xoá app Home Screen và cài lại** để lấy SW mới.

## Cập nhật nội dung
- Chỉ cần **thay index.html** và re-deploy.  
- Đổi version `CACHE_NAME` trong `service-worker.js` (vd: `nuly-calc-v5-2`) để buộc refresh cache.