cd frontend
npm run build
cd ..
cp -r frontend/build test
cd test

docker build -t app .
docker run -it -p 9000:9000 app