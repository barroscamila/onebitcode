function group() {
    console.log('Export nomeado não-inline (agrupado)')
}
  
function exportDefault() {
    console.log('Expor default não-inline')
}

export { group }

export default exportDefault