# script python qui publie sur MQTT des valeurs aléatoires
# qui modifient le rayon d'un cercle

import paho.mqtt.client as mqtt
import time
import random

# Configuration du client MQTT
client = mqtt.Client()
client.connect("localhost", 1884, 60)

# Boucle de publication
while True:
    rayon = random.randint(100, 1000)
    client.publish("test", rayon)
    time.sleep(1)
