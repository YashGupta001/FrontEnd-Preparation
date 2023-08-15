/*

https://www.youtube.com/watch?v=EXs775-J5zE&list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du&index=14 



Bootstrap Script in EC2 Instance | User Data In EC2

Now what will do is create a EC2 instance and attach Bootstrap and that script will install the nginx and on the default page it will print Welcome Yash Gupta


create ec2 install and go to advanced details and in the user data write the shell script

Shell Script:

#!/bin/bash

apt-get update
apt-get install nginx -y
echo "Welcome Yash Gupta" > /var/www/html/index.html

and launch instance


Instead of writing the Welcome by using echo in the file --> we can write the shell script to deploy our application so what will happen whenever our machine is created then our application will deploy automatically

*/
