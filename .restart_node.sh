#!/bin/sh
echo "============================= MANUALLY RESTART NODE PROCESS =============================" >> ./worker.log
supervisorctl stop codeheures-front:*
nodeproc=`netstat -pln | grep :8000 | awk '{print $7}' | cut -d "/" -f 1`
echo "kill du process $nodeproc"
kill -9 $nodeproc
supervisorctl start codeheures-front:*
echo "============================== END OF RESTART NODE PROCESS ==============================" >> ./worker.log