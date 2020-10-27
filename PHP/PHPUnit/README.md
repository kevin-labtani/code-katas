- install PHPUnit with

```php
composer require phpunit/phpunit
```

- setup psr4 autoloading in `composer.json`  
  namespace is `App`, located in the `src/` directory

```json
"autoload": {
    "psr-4": {
        "App\\": "src/"
    }
}
```

then run `composer dump-autoload` in the terminal

- run the tests with `./vendor/bin/phpunit tests`
