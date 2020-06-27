#!/bin/bash
ROOT=$(pwd)
VIRT_ENV='.lambda'

if [ ! -f main.py ]; then
    echo "Must be run from the server folder of weekend"
    exit -1
fi

# Remove any existing lambda virtual environments
if [ -d ${VIRT_ENV} ]; then
    rm -rf ${VIRT_ENV}
fi

# Build a new virtual environment
python -m venv ${VIRT_ENV}
wait

source ${VIRT_ENV}/bin/activate
pip install -r requirements.txt
wait

echo "Packaging up environment"
cd ${VIRT_ENV}/lib/python3.8/site-packages
zip -r9 ${ROOT}/function.zip .
wait

cd ${ROOT}
zip -g function.zip *.py
zip -g function.zip wit/*.py
wait

echo "Updating lambda on AWS"
aws lambda update-function-code --function wkend-server-dev-app --zip-file fileb://function.zip
wait
ls
echo "Done"
