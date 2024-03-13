~~~
kubectl -n kubernetes-dashboard create token admin-user
~~~

kubectl proxy

build express app:

docker build -t express-app-1 .

docker login

docker tag express-app-1 phongdosw2/express-app-1

docker push phongdosw2/express-app-1


docker build -t express-app-2 .

docker login

docker tag express-app-2 phongdosw2/express-app-2

docker push phongdosw2/express-app-2


kubectl exec -i -t express-app-1-2 --container express-app-1 -- /bin/bash