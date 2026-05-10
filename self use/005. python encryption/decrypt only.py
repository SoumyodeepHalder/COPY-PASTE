from cryptography.fernet import Fernet

key = 'm4l6qajoRj7I4ZD_y5CFxn_MUAGoWweQMSlVebsdbic='
inputfile='encrypted/levi.bin'
outputfile='decrypted/levi_decrypted.mp4'

# decrypt file
f=Fernet (key)

with open (inputfile, 'rb') as encrypted_file:
    encrypted=encrypted_file.read ()

decrypted=f.decrypt (encrypted)

with open (outputfile, 'wb') as decrypted_file:
    decrypted_file.write (decrypted)
