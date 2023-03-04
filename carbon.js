// Root
const root = { };

// Root properties

//         ! Finding HTML Elements !
root.getElemById = (Id) => {
      return document.getElementById(Id) };
root.getElemsByClass_nm = (Class_nm) => {
      return document.getElementsByClassName(Class_nm) };
root.getElemsByTag_nm = (Tag_nm) => {
      return document.getElementsByTagName(Tag_nm) };

//      ! Changing HTML Elements !

root.changeInnerHTML = (Element, value) => {
  return Element.innerHTML = value;  }

// ! Style ;
root.style = {};
root.style.bgColor = (value, Element) => {
  return Element.style.backgroundColor = value;  }
root.style.txtColor = (value, Element) => {
  return Element.style.color = value;  }
root.style.borderRadius = (value, Element) => {
  return Element.style.borderRadius = value;  }
root.style.width = (value, Element) => {
  return Element.style.width = value;  }
root.style.height = (value, Element) => {
  return Element.style.height = value;  }
root.style.fontSize = (value, Element) => {
  return Element.style.fontSize = value;  }
root.style.position = (value, Element) => {
  return Element.style.position = value;  }
root.style.margin = (value, Element) => {
    return Element.style.margin = value;  }
root.style.marginTop = (value, Element) => {
  return Element.style.marginTop = value;  }
root.style.marginLeft = (value, Element) => {
      return Element.style.marginLeft = value; }
root.style.marginRight = (value, Element) => {
      return Element.style.marginRight = value;  }
root.style.marginBottom = (value, Element) => {
      return Element.style.marginBottom = value; }
root.style.padding = (value, Element) => {
  return Element.style.padding = value;  }
root.style.paddingTop = (value, Element) => {
  return Element.style.paddingTop = value;  }
root.style.paddingLeft = (value, Element) => {
  return Element.style.paddingLeft = value;  }
root.style.paddingRight = (value, Element) => {
  return Element.style.paddingRight = value;  }
root.style.paddingBottom = (value, Element) => {
  return Element.style.paddingBottom = value;  }
root.style.position= (value, Element) => {
  return Element.style.position = value;  }

  



