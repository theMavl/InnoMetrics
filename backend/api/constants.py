"""
Constant for API service
"""
import os

MESSAGE_KEY = 'message'
INNOMETRICS_PATH = os.environ.get('INNOMETRICS_BACKEND_PATH')
try:
    INNOMETRICS_PRODUCTION = os.environ.get('INNOMETRICS_BACKEND_PRODUCTION')
    if INNOMETRICS_PRODUCTION:
        INNOMETRICS_PRODUCTION = True
        INNOMETRICS_PRODUCTION_KEYFILE = os.environ.get('INNOMETRICS_BACKEND_PRODUCTION_KEYFILE')
        INNOMETRICS_PRODUCTION_CERTFILE = os.environ.get('INNOMETRICS_BACKEND_PRODUCTION_CERTFILE')
except:
    INNOMETRICS_PRODUCTION = False

RSA_MODULO = 1024

EMAIL_KEY = 'email'
PASSWORD_KEY = 'password'
NAME_KEY = 'name'
SURNAME_KEY = 'surname'
PUBLIC_KEY = 'public_key'
PRIVATE_KEY = 'private_key'
PUBLIC_KEY_H = 'public_key_h'
PRIVATE_KEY_H = 'private_key_h'
OLD_PASSWORD_KEY = 'old_password'
NEW_PASSWORD_KEY = 'new_password'
ENC_KEY_H = 'enc_key_h'
INIT_VECTOR_KEY = 'iv'

ACTIVITY_KEY = 'activity'
ACTIVITIES_KEY = 'activities'
START_TIME_KEY = 'start_time'
END_TIME_KEY = 'end_time'
EXECUTABLE_KEY = 'executable_name'
BROWSER_URL_KEY = 'browser_url'
BROWSER_TITLE_KEY = 'browser_title'
IP_ADDRESS_KEY = 'ip_address'
MAC_ADDRESS_KEY = 'mac_address'
ACTIVITY_ID_KEY = 'activity_id'
IDLE_ACTIVITY_KEY = 'idle_activity'
ACTIVITY_TYPE_KEY = 'activity_type'
VALUE_KEY = 'value'
USER_KEY = 'user'
AMOUNT_TO_RETURN_KEY = 'amount_to_return'
OFFSET_KEY = 'offset'
FILTERS_KEY = 'filters'
TOKEN_KEY = 'token'
PROJECT_KEY = 'project'
USER_EMAIL_KEY = 'user_email'
MANAGER_KEY = 'manager'



