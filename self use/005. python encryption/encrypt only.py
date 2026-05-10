from cryptography.fernet import Fernet

key = 'm4l6qajoRj7I4ZD_y5CFxn_MUAGoWweQMSlVebsdbic='
inputfile='decrypted/levi.mp4'
outputfile='encrypted/levi.bin'

# encrypt file
f=Fernet (key)

with open (inputfile, 'rb') as original_file:
    original=original_file.read ()

encrypted=f.encrypt (original)

with open (outputfile, 'wb') as encrypted_file:
    encrypted_file.write (encrypted)
