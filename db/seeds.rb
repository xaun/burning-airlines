User.destroy_all
Airplane.destroy_all
Flight.destroy_all
Reservation.destroy_all


u1 = User.create(:name => 'Apple')
u2 = User.create(:name => 'Banana')

a1 = Airplane.create(:name => 'AA Plane', :rows => 5, :columns => 6)
a2 = Airplane.create(:name => 'BB Plane', :rows => 2, :columns => 3)

f1 = Flight.create(:name => 'AA123', :origin => 'SYD', :destination => 'MEL')
f2 = Flight.create(:name => 'BB123', :origin => 'MEL', :destination => 'SYD')

r1 = Reservation.create(:row => 2, :column => 4)
r2 = Reservation.create(:row => 1, :column => 2)


f1.airplane = a1
r1.user = u1
r1.flight = f1

f2.airplane = a2
r2.user = u2
r2.flight = f2

r1.save
r2.save
f1.save
f2.save