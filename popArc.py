import populartimes
import datetime
import sys

day = datetime.datetime.now()
weekNum = day.weekday()
hour = day.hour
pop = populartimes.get_id("AIzaSyA9cUckCJVlItWjGQHkkuTPcnJCaemntKI", "ChIJNTf1rgAphYAR0hMcYlna148")["populartimes"][weekNum]["data"][0]

print(pop)
sys.stdout.flush()