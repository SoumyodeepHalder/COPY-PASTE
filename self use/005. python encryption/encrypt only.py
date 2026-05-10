from cryptography.fernet import Fernet

key = ''
inputfile=''
outputfile=''

# encrypt file
f=Fernet (key)

with open (inputfile, 'rb') as original_file:
    original=original_file.read ()

encrypted=f.encrypt (original)

with open (outputfile, 'wb') as encrypted_file:
    encrypted_file.write (encrypted)