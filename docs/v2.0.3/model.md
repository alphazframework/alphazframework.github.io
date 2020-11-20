# Model
Model are actually behavior of app.

# Creating the model
You will find model directory in `App/Models/`, All the models store here
Suppose you want create database modal thats handel database stuff
it will look like that

```PHP
<?php
<?php

namespace App\Models;

use Config\Config;
use Zest\Database\Db as DB;

class Post extends DB
{
    /*
    * Store database name
    */
    protected static $db_name = Config::DB_NAME;
    /*
    * Store database table name
    */
    protected static $db_tbl = 'posts';

    public function name()
    {
        $db = new DB();
        $db->db()->method(); //example code
        //$db->db()->close() //close the connection
    }
}
```

# Accessing models in Controllers
You can accesss models in following way
`\App\Models\modalname::method(param);`
So in our above example its look like
`\App\Models\Post::yourmethod`
