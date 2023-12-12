### Windows Environment
Install virtualenv : `pip install virtualenv`  <br>
Create virtual env: `virtualenv myenv` <br>
Activate virtual env : `myenv\Scripts\activate` <br>
De-Activate virtual env : `deactive` <br>

### Ubuntu / Mac Environment
Create virtual environment : `python3 -m venv virtualEnv` <br>
Activate virtual environment : `source virtualEnv/bin/activate` <br>
Deactivate virtual env : `deactivate` <br>

### install all packages
install Packages:  `pip install -r requirements.txt` <br>


### run server

command: `uvicorn main:app --reload`