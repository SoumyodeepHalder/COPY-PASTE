from cryptography.fernet import Fernet

# generate key
# key = Fernet.generate_key ()

# with open ('mykey.key' , 'wb') as mykey:
#     mykey.write (key)


# read key
with open ('mykey.key', 'rb') as mykey:
    key=mykey.read ()

print (key)


# encrypt file
# f=Fernet (key)

# with open ('eye.mp4', 'rb') as original_file:
#     original=original_file.read ()

# encrypted=f.encrypt (original)

# with open ('eye_encrypted.txt', 'wb') as encrypted_file:
#     encrypted_file.write (encrypted)


# decrypt file
f=Fernet (key)

with open ('eye_encrypted.txt', 'rb') as encrypted_file:
    encrypted=encrypted_file.read ()

decrypted=f.decrypt (encrypted)

with open ('eye_decrypted.mp4', 'wb') as decrypted_file:
    decrypted_file.write (decrypted)
