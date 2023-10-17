import { createClient } from "@supabase/supabase-js";
import { AddressLike } from "ethers";

const supabaseUrl = "https://dosiqrryrnpwfvzxcjls.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvc2lxcnJ5cm5wd2Z2enhjamxzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODQ3NjE3NSwiZXhwIjoyMDA0MDUyMTc1fQ.8iLeg9tVyIhYTztxlWwZfqfDiQIhO-NQ9cz3Pg0O9BA";
const supabase = createClient(supabaseUrl, supabaseKey);
//get user data
export async function getAllData() {
	let { data: GamePassUsers, error } = await supabase
		.from("GamePassUsers")
		.select("*");
	if (error) {
		return { error };
	}
	return { GamePassUsers };
}
export async function getSpecificUser(walletAddress: string) {
	let { data: GamePassUsers, error } = await supabase
		.from("GamePassUsers")
		.select("*")
		.eq("walletAddress", walletAddress);
	if (error) {
		return { error };
	}
	return { GamePassUsers };
}
export async function createUser(data: {
	moveBought: string | undefined;
	walletAddress: AddressLike | undefined | string;
	Score: string | undefined;
	moveUsed: string | undefined;
}) {
	let { data: GamePassUsers, error } = await supabase
		.from("GamePassUsers")
		.insert([data])
		.select();
	if (error) {
		return { error };
	}
	return { GamePassUsers };
}
export async function updateUser(
	Key: AddressLike,
	value: {
		moveBought: string | undefined;
		Score: string | undefined;
		moveUsed: string | undefined;
	}
) {
	const { data, error } = await supabase
		.from("GamePassUsers")
		.update(value)
		.eq("walletAddress", Key.toString())
		.select();

	if (error) {
		console.log({ error });
		return { error };
	}
	//console.log(data);
	return { data };
}
//get high scores
//createUser
//update User
