#!/bin/bash
ECS_AUTH="aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 015376519742.dkr.ecr.us-east-1.amazonaws.com"
ECS_CMD="ecs-cli compose --project-name wkend-test service up --create-log-groups --cluster-config wkend-test --ecs-profile wkend-test-user"
AWS_REPO="015376519742.dkr.ecr.us-east-1.amazonaws.com"
FRONTEND_IMAGE="wkend-next-js"
BACKEND_IMAGE="wkend-fastapi-py"
FRONTEND_DIR="ui"
BACKEND_DIR="server"

if [ $1 == "push" ]
then
  eval $ECS_AUTH
  if [ $2 == "front-end" ]
  then
    cd $FRONTEND_DIR
    docker build -t "${AWS_REPO}/${FRONTEND_IMAGE}" .
    docker push "${AWS_REPO}/${FRONTEND_IMAGE}"
  elif [ $2 == "backend" ]
  then
    cd $BACKEND_DIR
    docker build -t "${AWS_REPO}/${BACKEND_IMAGE}" .
    docker push "${AWS_REPO}/${BACKEND_IMAGE}"
  else
    echo "I don't know what to do with ${2}";
    exit -1;
  fi;
elif [ $1 == "deploy" ]
then
  cd aws
  eval $ECS_CMD
fi;

