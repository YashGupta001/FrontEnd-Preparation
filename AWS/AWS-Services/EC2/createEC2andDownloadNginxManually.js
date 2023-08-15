/*

EC2 --> Elastic Compute Cloud
In this service we can the servers on rent


1. Creating a server which can be access by SSH key:
https://www.youtube.com/watch?v=f-T4xWUZWSk&list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du&index=10 --> create ec2



2. https://www.youtube.com/watch?v=HPrq6kdsEZ0&list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du&index=11 --> access ec2

Terminal:
Where you saved your key
chmod 400 aws-tutorial-key.pem
ssh -i "aws-tutorial-key.pem" ubuntu@ec2-43-205-195-117.ap-south-1.compute.amazonaws.com


once authenticated or connect via terminal:

1. cat /etc/os-release (to see the os)
2. free -m (to see the memory)
3. lscpu (to check how many cpus you have)
4. df -h (to check the size)
5. ip a (to see the ip address of that instance)


3. Install Nginx in EC2 Instance | Deploy Sample Application In EC2

https://www.youtube.com/watch?v=HaRki0xPPd4&list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du&index=13 


NGINX is open-source web server software used for reverse proxy, load balancing, and caching. It provides HTTPS server capabilities and is mainly designed for maximum performance and stability. It also functions as a proxy server for email communications protocols, such as IMAP, POP3, and SMTP.

Select Instance --> go to connect --> connect ec2 instance first option click on connect

* to login as a root user type sudo -i
* apt-get update
* nginx -t
* apt-get install nginx
* nginx -t (it checks the configuration of nginx)
* service nginx status (it will tell whether the service is start or not)
* curl localhost (trying to access it on local host)
* cd /var/www/html/ (go to this folder to see from where the files comes)
* ls
* cat index.nginx-debian.html (Cat(concatenate) command is very frequently used in Linux. It reads data from the file and gives its content as output)
* echo "Welcome Yash Gupta" > index.html  --> create a file which has writtem "Welcome Yash Gupta"
* curl localhost


what we have done here is :
we have run the sudo -i and apt-get update command then install nginx then created a file index.html inside /var/www/html/ folder where have written Welcome Yash Gupta, but this we have done manually but will do this step by using bootstrap


Now delete the instance that we have created
--> select the instance --> go to Instance state --> terminate the instance




*/
