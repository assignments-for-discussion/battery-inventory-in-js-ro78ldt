const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  
  let healthyBatteries = 0;
  let exchangeBatteries = 0;
  let failedBatteries = 0;
  
function computeSOH(presentCapacity) {
  let ratedCapacity = 120;
  return (presentCapacity / ratedCapacity) * 100;
}
 
for (const presentCapacity of presentCapacities) {
  const soh = computeSOH(presentCapacity);
  if (soh > 80) {
    healthyBatteries++;
  } else if (soh >= 62) {
    exchangeBatteries++;
  } else {
    failedBatteries++
  }
}
  return {
    healthy: healthyBatteries,
    exchange: exchangeBatteries,
    failed: failedBatteries,
  };
}


function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
