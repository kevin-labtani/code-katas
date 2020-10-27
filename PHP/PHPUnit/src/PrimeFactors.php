<?php

namespace App;

class PrimeFactors
{
    // Is the number divisible by 2
    // If true, then divide by 2. If false, increase candidate number and try again
    //  Repeat
    public function generate($number)
    {
        $factors = [];

        for ($candidate = 2; $number > 1; ++$candidate) {
            while (0 === $number % $candidate) {
                $factors[] = $candidate;
                $number = $number / $candidate;
            }

            // replace inner while with a for
            // for (; 0 === $number % $candidate; $number /= $candidate) {
            //     $factors[] = $candidate;
            // }
        }

        return $factors;
    }
}
