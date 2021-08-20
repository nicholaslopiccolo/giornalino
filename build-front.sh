npm run clear

cd giornalino-front
npm run build && mv dist/index.html ../giornalino-back/views/ && mv dist/* ../giornalino-back/public/
cd ..