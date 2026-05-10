from cryptography.fernet import Fernet

key = ''
inputfile=''
outputfile=''

# decrypt file
f=Fernet (key)

with open (inputfile, 'rb') as encrypted_file:
    encrypted=encrypted_file.read ()

decrypted=f.decrypt (encrypted)

with open (outputfile, 'wb') as decrypted_file:
    decrypted_file.write (decrypted)