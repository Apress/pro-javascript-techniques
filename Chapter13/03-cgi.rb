# Import the CGI library
require 'cgi'

# Create a new CGI object, which will parse
# the incoming CGI parameters
cgi = CGI.new

# Capture the SQL query parameter
sql = cgi['sql']

# Get the database name from the user and make
# sure that no malicious characters were used
d = cgi['db'].gsub(/[^a-zA-Z0-9_-]/, "")
