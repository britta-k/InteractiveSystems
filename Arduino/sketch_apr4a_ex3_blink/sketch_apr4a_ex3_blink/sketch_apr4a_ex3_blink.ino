
int LEDpin = 13;
int delayHigh = 1000;
int delayLow - 1000;

void setup() 
{
 pinMode(13, OUTPUT); 
}

void loop()
{
  digitalWrite(LEDpin, HIGH);
  delay(delayHigh);
  digitalWrite(LEDpin, LOW);
  delay(delayLow);
}




