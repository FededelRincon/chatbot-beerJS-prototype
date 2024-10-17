

export function getHistoryParse(state: any): Array<{ role: string, content: string }> {
    const history = state.get('history') || [];
    return history.map((item: any) => ({
        role: item.role,
        content: item.content,
    }));
}

export async function pushHistoryParse(state: any, role: 'user' | 'system', content: string) {
    // Obtenemos el historial actual o inicializamos uno nuevo si no existe
    const history = state.get('history') || [];
    // console.log('history: ',history)
    
    // Agregamos el nuevo mensaje al historial, pero no quiero perder lo que tengo, entonces pusheo y despues guardo
    history.push({ role, content });
    
    // Actualizamos el estado con el nuevo historial
    await state.update({ history });
}

export async function clearHistory(state: any) {
    state.clear();
}