# ChatApp
Chat Application Using Node JS and MongoDB

Steps to Follow
------------------------------------------------
Install MongoDB
==========================
1. download the latest release through the shell
curl -O http://downloads.mongodb.org/osx/mongodb-osx-x86_64-3.0.1.tgz

2. Extract the files from the downloaded archive.
tar -zxvf mongodb-osx-x86_64-3.0.1.tgz

3. Copy the extracted archive to the target directory.
Copy the extracted folder to the location from which MongoDB will run.
mkdir -p mongodb
cp -R -n mongodb-osx-x86_64-3.0.1/ mongodb

4. Ensure the location of the binaries is in the PATH variable.
The MongoDB binaries are in the bin/ directory of the archive. To ensure that the binaries are in your PATH, you can modify your PATH.
For example, you can add the following line to your shell’s rc file (e.g. ~/.bashrc):

export PATH=mongodb-install-directory/bin:$PATH

Replace mongodb-install-directory with the path to the extracted MongoDB archive.

RUNNING MONGODB
==========================

1. Create the data directory.
Before you start MongoDB for the first time, create the directory to which the mongod process will write data. By default, the mongod process uses the /data/db directory. If you create a directory other than this one, you must specify that directory in the dbpath option when starting the mongod process later in this procedure.

The following example command creates the default /data/db directory:

mkdir -p /data/db

2. Set permissions for the data directory.
Before running mongod for the first time, ensure that the user account running mongod has read and write permissions for the directory.

3. Run MongoDB.

Go to the bin directory of the mongo installation as ../bin/ And then type mongod

4. Stop MongoDB

press Control+C in the terminal where the mongod instance is running.

Running Node Server
===============================

1. Download the project 

2. go to the project folder, where server.js is present. And execute the below command

node server.js

3. Then launch your browser with http://127.0.0.1:3000

Boom! You will see the chat Application running. You can open in 2 windows and can test as well.




