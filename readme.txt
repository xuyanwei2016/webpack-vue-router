npm init -y ��ʼ��һ��package.json��¼��������

npm install webpack webpack-dev-server --save-dev   webpack�ǰ�װwebpack������  webpack-dev-server��webpack����  �ǿ������� ���߾Ͳ���Ҫ��

vue         ��Ҫ����vue    ����vueģ��
npm install vue-loader vue-template-compiler --save-dev
vue������Ҫ������
npm install vue vue-router --save

babel
npm install babel-core babel-loader babel-preset-es2015(����es6) style-loader css-loader --save-dev
npm install html-webpack-plugin --save-dev ���html�ļ���һ����� 

npm install babel-preset-stage-0 --save-dev ��Ϊ����es6�м���...App

package.json
ʵʱԤ��    ����            ������     ��ɫ                   distĿ¼��  �˿�  ��ˢ�� 
"dev": "webpack-dev-server --grogress --colors --content-base dist --port 300 --inline"

��װ������
npm install animate.css --save

��װnpm install vue-resource --save ��Ϊ����������