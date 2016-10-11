# Import the external SQLite library
require 'rubygems'
require_gem 'sqlite3-ruby'

# Later on in the program…

# Connect to the SQLite database, which is just a file
# ‘d’ contains the name of our database, which is ‘wiki’
db = SQLite3::Database.new('../../data/' + d + '.db')
