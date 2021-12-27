cd frontend
npm run build
cd ..
cp -r frontend/build SOMASApp
cd SOMASApp

docker build -t app .
docker run -it -p 9000:9000 app