'use server';
import {createClient} from "@/lib/server";
import {auth} from "@clerk/nextjs/server";

export const createCompanion = async (formData: any) => {
    const { userId: author } = await auth();
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author })
        .select();

    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}
